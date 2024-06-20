describe('API Testing with Cypress', () => {
  const sidebarUrl = Cypress.env('sidebarUrl');
  const postsUrl = Cypress.env('postsUrl');
  
    it('Assert API response', () => {
      cy.request(sidebarUrl).then((response) => {
        expect(response.status).to.eq(200);   
      });
    });

    it('Assert that the response has 3 objects', () => {
      cy.request(sidebarUrl).then((response) => {      
        // Assert that it has 3 objects
        expect(response.body).to.have.length(3);
        // console.log(response.body[0].position);
      });
    });

    it('Assert position values', () => {
      cy.request(sidebarUrl).then((response) => {      
        // Assert position values
        expect(response.body[0].position).to.eq(0);
        expect(response.body[1].position).to.eq(1);
        expect(response.body[2].position).to.eq(2);
      });
    });

    it('Assert title, home_url, and article_url are not empty and URLs start with "https://', () => {
      cy.request(sidebarUrl).then((response) => {      
        // Assert title, home_url, and article_url are not empty and URLs start with "https://"
        response.body.forEach((event) => {
          expect(event.title).to.not.be.empty;
          expect(event.home_url).to.not.be.empty;
          expect(event.home_url).to.match(/^https:\/\//);
          expect(event.article_url).to.not.be.empty;
          expect(event.article_url).to.match(/^https:\/\//);
        });
      });
    });

  });