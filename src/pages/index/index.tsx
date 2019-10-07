import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import Tree from '../../components'

import './index.scss'

const dataSource = [
	{
		label: '水果',
		value: '001',
		children: [
			{
				label: '苹果',
				value: '001_001',
				disabled: true,
			},
			{
				label: '梨子',
				value: '001_002',
				isLeaf: true,
			}
		]
	},
	{
		label: '蔬菜',
		value: '002',
		children: [
			{
				label: '白菜',
				value: '002_001'
			},
			{
				label: '萝卜',
				value: '002_002'
			}
		]
	}
]

class Index extends Component {

    config: Config = {
    navigationBarTitleText: '首页'
	}
	
	state = {
		value: null,
	}

	onChange = val => {
		this.setState({
			value: val
		})
	}

	loadData = data => {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve()
				data.children = [{
					label: '冰糖雪梨',
					value: 'test',
				}]
				this.forceUpdate()
			}, 100)
		})
	}

  render () {
		const { value } = this.state
    return (
      <View className='index'>
				<Tree 
					multiple
					value={value} 
					loadData={this.loadData}
					dataSource={dataSource} 
					onChange={this.onChange} 
				/>
      </View>
    )
  }
}


export default Index as ComponentClass
