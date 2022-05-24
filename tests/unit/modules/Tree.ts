import Tree from "../../../src/modules/Tree"
import data from "../../data/Employees.json"
import expectedTreeData from "../../data/EmployeesExpectedTree.json"
import { describe } from "jest-circus"


describe('Tree', () => {
	describe('buildTree', () => {
		it('should return correct organization tree for given employees array', () => {
			expect(Tree.buildTree(data, "managerId")).toEqual(expectedTreeData)
		})
	})
})
