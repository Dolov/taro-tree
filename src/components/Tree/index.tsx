import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import TreeCopy from './indexCopy'

interface ITree {
	dataSource: [];
}

export default class Tree extends Taro.PureComponent<ITree> {

	state = {

	}

	render() {
		const { dataSource } = this.props
		if (!Array.isArray(dataSource)) return null
		return (
			<View>
				{dataSource.map(item => {
					const { value, label, children } = item
					return (
						<View key={value} style={{paddingLeft:'30px'}}>
							<Text>{label}</Text>
							<TreeCopy dataSource={children} />
						</View>
					)
				})}
			</View>
		)
	}
}
