using my.bookshop as my from '../db/schema';

service CatalogService @(path: '/catalog', impl: 'srv/cat-service') {
    type CategoryPayload {
        ID: Integer;
        Name: String;
        Description: String;
    }
    @readonly entity Books as projection on my.Books;
    function getData() returns String;
    action postData(payload: array of CategoryPayload) returns String;
    action putData(payload: array of CategoryPayload) returns String;
}
