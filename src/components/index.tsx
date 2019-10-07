import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import cls from 'classnames'
import Tree from './Tree'
import { ITree } from './interface'
import './style.scss'

const clsPrefix = 'cp-tree'


export default class TreeSelect extends Taro.PureComponent<ITree> {

  static options = {
    styleIsolation: 'shared'
  }

  static defaultProps = {
    multiple: false,
    dataSource: [],
    treeDefaultExpandAll: true,
  }

  state = {
    
  }

  render() {
    const { dataSource, multiple, value, onChange, treeDefaultExpandAll, loadData } = this.props
    return (
      <View className={cls(clsPrefix, {
        [`${clsPrefix}-radio`]: !multiple,
        [`${clsPrefix}-multiple`]: multiple,
      })}>
        <Tree
          value={value}
          loadData={loadData}
          multiple={multiple}
          onChange={onChange}
          dataSource={dataSource} 
          treeDefaultExpandAll={treeDefaultExpandAll}
        />
      </View>
    )
  }
}