import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  getAllContactsController,
  getContactByIdController,
  addContactController,
  patchContactController,
  deleteContactController,
} from '../controllers/contacts.js';

import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

<<<<<<< HEAD
router.get('/contacts', ctrlWrapper(getAllContactsController));
=======
router.use(authenticate);
>>>>>>> b097a7bc73adc20cddf884fcce3d1ba8cd211cfc

router.get('/', ctrlWrapper(getAllContactsController));

router.get('/:contactId', isValidId, ctrlWrapper(getContactByIdController));

router.post(
  '/',
  validateBody(createContactSchema),
  ctrlWrapper(addContactController),
);

router.patch(
<<<<<<< HEAD
  '/contacts/:contactId',
=======
  '/:contactId',
>>>>>>> b097a7bc73adc20cddf884fcce3d1ba8cd211cfc
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
);

<<<<<<< HEAD
router.delete(
  '/contacts/:contactId',
  isValidId,
  ctrlWrapper(deleteContactController),
);
=======
router.delete('/:contactId', isValidId, ctrlWrapper(deleteContactController));
>>>>>>> b097a7bc73adc20cddf884fcce3d1ba8cd211cfc

export default router;
