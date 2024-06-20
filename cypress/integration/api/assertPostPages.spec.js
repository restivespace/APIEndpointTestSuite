describe('API Testing with Cypress', () => {
  const sidebarUrl = Cypress.env('sidebarUrl');
  const postsUrl = Cypress.env('postsUrl');

  
    it('Assert total is greater than 1', () => {
      cy.request(postsUrl).then((response) => {
        expect(response.status).to.eq(200);
        
        const { total, per_page, current_page, total_pages, posts } = response.body;
  
        // Assert total is greater than 1
        expect(total).to.be.greaterThan(1);

      });
    });

    it('Assert per_page is 10', () => {
      cy.request(postsUrl).then((response) => {
        expect(response.status).to.eq(200);
        
        const { total, per_page, current_page, total_pages, posts } = response.body;
  
        // Assert per_page is 10
        expect(per_page).to.eq(10);
      });
    });

    it('Assert current_page is 1', () => {
      cy.request(postsUrl).then((response) => {
        expect(response.status).to.eq(200);
        
        const { total, per_page, current_page, total_pages, posts } = response.body;
  
        // Assert current_page is 1
        expect(current_page).to.eq(1);
      });
    });

    it('Assert total_pages is greater than 50000', () => {
      cy.request(postsUrl).then((response) => {
        expect(response.status).to.eq(200);
        
        const { total, per_page, current_page, total_pages, posts } = response.body;

        // Assert total_pages is greater than 50000
        expect(total_pages).to.be.greaterThan(50000);
  
        // Assert posts array contains 10 objects
        expect(posts).to.have.length(10);
  
        // Assert required fields are not empty for each post
        posts.forEach((post) => {
          expect(post.author).to.not.be.empty;
          expect(post.slug).to.not.be.empty;
          expect(post.content).to.not.be.empty;
          expect(post.title).to.not.be.empty;
          expect(post.status).to.not.be.empty;
          expect(post.type).to.not.be.empty;
        });
      });
    });

    it('Assert posts array contains 10 objects', () => {
      cy.request(postsUrl).then((response) => {
        expect(response.status).to.eq(200);
        
        const { total, per_page, current_page, total_pages, posts } = response.body;

        // Assert posts array contains 10 objects
        expect(posts).to.have.length(10);  
      });
    });

    it('Assert required fields are not empty for each post', () => {
      cy.request(postsUrl).then((response) => {
        expect(response.status).to.eq(200);
        
        const { total, per_page, current_page, total_pages, posts } = response.body;

        // Assert required fields are not empty for each post
        posts.forEach((post) => {
          expect(post.author).to.not.be.empty;
          expect(post.slug).to.not.be.empty;
          expect(post.content).to.not.be.empty;
          expect(post.title).to.not.be.empty;
          expect(post.status).to.not.be.empty;
          expect(post.type).to.not.be.empty;
        });
      });
    });

  });