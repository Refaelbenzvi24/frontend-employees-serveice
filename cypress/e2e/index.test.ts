import "cypress-localstorage-commands"
import EmployeesList from "../../tests/data/Employees.json"


describe('Employees', () => {
	beforeEach(() => {
		cy.viewport('macbook-16')
		cy.setLocalStorage('theme', 'dark')

		cy.intercept({
			method: 'GET',
			url:    '/v1/employee'
		}, EmployeesList )

		cy.intercept({
			method: 'GET',
			url:    '/v1/auth/login?email=david.cohen%40email.com&password=123456'
		}, {
			email:     "david.cohen@email.com",
			firstName: "David",
			id:        1,
			lastName:  "Cohen",
			managerId: null,
			password:  "123456",
			role:      "CEO",
			startDate: "2020-01-05T00:00:00.000Z"
		})
	})

	it('should have a title', () => {
		cy.visit('/login')
		cy.contains('Employees app')
	})

	it('should login', () => {
		cy.visit('/login')
		cy.get('#email').type('david.cohen@email.com')
		cy.get('#password').type('123456')
		cy.get('#login-submit').click()
		cy.contains('David Cohen')
	})

	it('should logout', () => {
		cy.visit('/login')
		cy.get('#email').type('david.cohen@email.com')
		cy.get('#password').type('123456')
		cy.get('#login-submit').click()
		cy.contains('David Cohen')
		cy.get('#logout-button').click()
		cy.contains('Employees app')
	})

	it('should change theme', () => {
		cy.visit('/')
		cy.get('body')
			.should('have.css', 'background-color')
			.and('eq', 'rgb(24, 24, 24)')
		cy.get('#theme-toggle-button')
			.click()
		cy.get('body')
			.should('have.css', 'background-color')
			.and('eq', 'rgb(255, 255, 255)')
	})

	it('should list employees', () => {
		cy.visit('/')
		cy.get('#employees-tree-container')
			.should('contain', 'John Doe')
			.and('contain', 'David Cohen')
			.and('contain', 'Alice Don')
	})

	it('should navigate to 404 page', () => {
		cy.visit('/404')
		cy.contains('404')
	})
})
