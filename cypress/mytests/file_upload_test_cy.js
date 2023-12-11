// input type="file" attribute should present in the DOM, otherwise it wont work

describe('file upload use cases', ()=> {

    it.skip('simple file upload', ()=>{
        cy.visit('http://automationpractice.com/index.php?controller=contact')

        const yourFixturePath = 'fileUpload.jpeg';
        cy.get('#fileUpload').attachFile(yourFixturePath);

    })

    it.skip('drag and drop file upload', ()=>{
        cy.visit('https://css-tricks.com/drag-and-drop-file-uploading/')

        const yourFixturePath = 'fileUpload.jpeg';
        cy.get('#file').attachFile(yourFixturePath);
        cy.get('.box__success').should('contain.text', 'Done!')

    })

    it.skip('This case should fail due to file not present in the fixtures folder - drag and drop file upload', ()=>{
        cy.visit('https://css-tricks.com/drag-and-drop-file-uploading/')

        const yourFixturePath = 'fileUpload.jpeg';
        cy.get('#file').attachFile('D:\Birthday Celebration\FB\DSC_0687.jpeg');
        cy.get('.box__success').should('contain.text', 'Done!')

    })

    it.skip('multiple files upload', ()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        const yourFixturePath = 'fileUpload.jpeg';
        const yourFixturePath1 = 'upload.txt';
        const yourFixturePath2 = 'example.json';

        cy.get('#fileToUpload')
        .attachFile(yourFixturePath)
        .attachFile(yourFixturePath1)
        .attachFile(yourFixturePath2);
        cy.get('p:nth-child(6) > strong').should('contain.text', 'Files You Selected:')

    })

    it('change file name while uploading', ()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        const yourFixturePath = 'fileUpload.jpeg';

        cy.get('#fileToUpload').attachFile({ filePath: 'yourFixturePath', fileName: 'users.json' });

        cy.get('p:nth-child(6) > strong').should('contain.text', 'Files You Selected:')

    })


    it.skip('Binary file upload', ()=>{
        cy.visit('http://automationpractice.com/index.php?controller=contact')

        const yourFixturePath = 'image1.jpeg';

        const special = 'file.sps';
        
        cy.fixture(yourFixturePath, 'binary')
        .then(Cypress.Blob.binaryStringToBlob)
        .then(fileContent => {
        cy.get('#fileUpload').attachFile({
        fileContent,
        fileName: 'yourFixturePath',
        mimeType: 'application/octet-stream',
        encoding: 'utf-8'
        });
  });

    })

})