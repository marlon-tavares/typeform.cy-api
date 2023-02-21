import 'cypress-plugin-api'

const API_URL = Cypress.env('API_BASE_URL')
const authorization = `Bearer ${Cypress.env('TYPEFORM_ACCESS_TOKEN')}`

it('retrieves form response', () => {
  cy.api({
    method: 'GET',
    url: `${API_URL}forms/${Cypress.env('formId')}/responses`,
    headers: { authorization }
  }).should(({ status, body }) => {
//    const { alias, email, language } = body

    expect(status).to.eq(200)
    expect(body.total_items).to.eq(body.items.length)
  })
})