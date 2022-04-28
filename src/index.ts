import 'reflect-metadata'

import Operator from '@dot-i/k8s-operator'

export default class ProjectOperator extends Operator {
	protected async init() {
		console.log('Initializing')
	}
}
