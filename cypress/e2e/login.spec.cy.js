describe('Orange HRM Test spec', () => {

  const selectorList = {

    checkUserRoleList: ".oxd-select-wrapper",
    checkStatusList: ".oxd-select-wrapper",
    selectRoleList: ".oxd-select-dropdown",
    selectStatusList: ".oxd-select-dropdown",
    dashbordGrid: ".orangehrm-dashboard-grid"
  }


  it('Login - Success', () => {
    cy.visit('/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.contains('button', ' Login ').click()
    cy.location('pathname', { timeout: 10000 }).should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashbordGrid)
    cy.contains('span', 'Admin', { timeout: 10000 }).click()
    cy.get('[data-v-957b4417] .oxd-input').type('JoãoQA')
    cy.get('input[placeholder="Type for hints..."]', { timeout: 10000 }).type('freire')
    cy.get(selectorList.checkUserRoleList).eq(0).click()
    cy.contains(selectorList.selectRoleList, 'Admin').click()
    cy.get(selectorList.checkStatusList).eq(1).click()
    cy.contains(selectorList.selectStatusList, 'Enable').click()
    cy.contains('button', 'Reset').click()
  })
})