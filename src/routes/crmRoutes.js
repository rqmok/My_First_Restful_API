import {
    addNewContact,
    getContacts,
    getContactById,
    updateContact
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
        .delete((req, res) =>
            res.send('DELETE request successful')
        );
}

export default routes;