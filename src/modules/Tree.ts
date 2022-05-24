export interface TreeNode {
	children: TreeNode[]
	parentId: number | null
}


export default class Tree {
	/** Create a tree from an array of object with relativity analogue.
	 * @param nodesArray {Object[]} array of nodes
	 * @param parentIdFieldName {string} The name of the parentId field in sent data.
	 * @returns {TreeNode} returns a tree for a given array of related nodes.
	 */
	static buildTree(nodesArray: Record<string, any>[], parentIdFieldName: string): TreeNode[] {
		const tree = Tree.transformIntoTreeNode(nodesArray, parentIdFieldName)

		tree.forEach((treeNode) => {
			if (treeNode.parentId) {
				tree[treeNode.parentId - 1].children.push(treeNode)
			}
		})

		return tree.filter((treeNode) => treeNode.parentId === null)
	}

	/**
	 * transform array of objects into array of tree nodes.
	 * @param nodesArray {object[]} array of nodes
	 * @param parentIdFieldName {string} The name of the parentId field in sent data.
	 * @private
	 */
	private static transformIntoTreeNode(nodesArray: Record<string, any>[], parentIdFieldName: string): TreeNode[] {
		return nodesArray.map((treeNode) => ({ ...treeNode, parentId: treeNode[parentIdFieldName], children: [] } as TreeNode))
	}
}
