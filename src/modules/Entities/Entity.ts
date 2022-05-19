export default class Entity {
	transformExclude(fields = [], object = this) {
		const transformedObject = object

		fields.forEach((field) => {
			delete transformedObject[field]
		})

		return transformedObject
	}

	transform(fields = [], object = this) {
		const transformed = {}

		fields.forEach((field) => {
			transformed[field] = object[field]
		})

		return transformed
	}
}
