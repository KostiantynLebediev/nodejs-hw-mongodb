import { SORT_ORDER } from '../constants/index.js';
import { contactsCollection } from '../db/models/contacts.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getAllContacts = async ({
  userId,
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  filter = {},
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

<<<<<<< HEAD
  const contactsQuery = contactsCollection.find();
=======
  const contactsQuery = contactsCollection.find({ userId });
>>>>>>> b097a7bc73adc20cddf884fcce3d1ba8cd211cfc

  if (filter.type) {
    contactsQuery.where('contactType').equals(filter.type);
  }

  if (filter.isFavourite !== undefined) {
    contactsQuery.where('isFavourite').equals(filter.isFavourite);
  }

  const [countContacts, contacts] = await Promise.all([
    contactsCollection.find().merge(contactsQuery).countDocuments(),
    contactsQuery
      .find()
      .limit(limit)
      .skip(skip)
      .sort({ [sortBy]: sortOrder })
      .exec(),
  ]);
  
const paginationData = calculatePaginationData(countContacts, page, perPage);

<<<<<<< HEAD
  const paginationData = calculatePaginationData(countContacts, page, perPage);

  return {
=======
return {
>>>>>>> b097a7bc73adc20cddf884fcce3d1ba8cd211cfc
    data: contacts,
    ...paginationData,
  };
};

<<<<<<< HEAD
export const getContactById = async (contactId) => {
  const contact = await contactsCollection.findById(contactId);
  return contact;
};

export const addContact = async (payload) => {
  const addedContact = await contactsCollection.create(payload);
  return addedContact;
};

export const updateContact = async (contactId, payload, options = {}) => {
  const result = await contactsCollection.findOneAndUpdate(
    { _id: contactId },
    payload,
=======
export const getContactById = async (contactId, userId) => {
  const contact = await contactsCollection.findOne({ _id: contactId, userId });
  return contact;
};

export const addContact = async (contact, userId) => {
  const addedContact = await contactsCollection.create({
    ...contact,
    userId,
  });
  return addedContact;
};

export const updateContact = async (
  contactId,
  userId,
  contact,
  options = {},
) => {
  const result = await contactsCollection.findOneAndUpdate(
    {
      _id: contactId,
      userId,
    },
    contact,
>>>>>>> b097a7bc73adc20cddf884fcce3d1ba8cd211cfc
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  if (!result || !result.value) return null;

  return {
    contact: result.value,
    isNew: Boolean(result?.lastErrorObject?.upserted),
  };
};

<<<<<<< HEAD
export const deleteContact = async (contactId) => {
  const deletedContact = await contactsCollection.findOneAndDelete({
    _id: contactId,
=======
export const deleteContact = async (contactId, userId) => {
  const deletedContact = await contactsCollection.findOneAndDelete({
    _id: contactId,
    userId,
>>>>>>> b097a7bc73adc20cddf884fcce3d1ba8cd211cfc
  });
  return deletedContact;
};
