import {
    addNewContact,
    getContacts,
    getContactById,
    updateContact,
    deleteContact
} from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
        // GET Endpoint
        .get(getContacts)
        // POST Endpoint
        .post(addNewContact);
    
    app.route('/contact/:contactId')
        // GET Endpoint
        .get(getContactById)
        // PUT Endpoint
        .put(updateContact)
        // DELETE Endpoint
        .delete(deleteContact);
}

export default routes;