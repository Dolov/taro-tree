import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import Tree from '../../components/Tree'

import './index.scss'

const dataSource = [
	{
		label: '水果',
		value: '001',
		children: [
			{
				label: '苹果',
				value: '001_001'
			},
			{
				label: '梨子',
				value: '001_002'
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


  render () {
    return (
      <View className='index'>
        <Tree dataSource={dataSource} />
      </View>
    )
  }
}


export default Index as ComponentClass
