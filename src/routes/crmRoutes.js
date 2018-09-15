import { addNewContact, getContacts, getContactById } from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
        // GET Endpoint
        .get(getContacts)
        // POST Endpoint
        .post(addNewContact);
    
    app.route('/contact/:contactId')
        // GET Endpoint
        .get(getContactById)
        .put((req, res) =>
            res.send('PUT request successful')
        )
        .delete((req, res) =>
            res.send('DELETE request successful')
        );
}

export default routes;