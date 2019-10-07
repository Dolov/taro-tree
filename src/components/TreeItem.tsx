import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtCheckbox, AtIcon } from 'taro-ui'
import cls from 'classnames'
import { ITreeItem } from './interface'
import Tree from './Tree'


const iconSize = 20
const iconColor = '#C7C7CC'
const checkIconSize = 18
const checkIconColor = '#1890FF'



interface ITreeItemState {
  visible: boolean;
  loading: boolean;
}

export default class TreeItem extends Taro.PureComponent<ITreeItem, ITreeItemState> {

  static options = {
    styleIsolation: 'shared'
  }

  constructor(props) {
    super(props)
    const { treeDefaultExpandAll, data={} } = props
    const { children } = data
    const visible = treeDefaultExpandAll && Array.isArray(children) && children.length > 0
    this.state = {
      visible,
      loading: false,
    }
  }

  loaded = false

  handleToggleMore = async () => {
    const { visible } = this.state
    const { data, loadData } = this.props
    const { children } = data
    const hasChild = Array.isArray(children) && children.length > 0
    if (hasChild || this.loaded) {
      this.setState({
        visible: !visible,
      })
      return 
    } 
    if (typeof loadData === 'function') {
      this.setState({loading: true})
      await loadData(data)
      this.setState({
        visible: true,
        loading: false
      }, () => {
        this.loaded = true
      })
    } else {
      this.setState({
        visible: !visible,
      })
    }
  }

  handleRadioTreeChange = (value, disabled) => {
    if (disabled) return 
    const { onChange } = this.props
    onChange(value)
  }

  render() {
    const { visible, loading } = this.state
    const { selectedValue, onChange, multiple, data, treeDefaultExpandAll, loadData } = this.props
    const { label, children, value, isLeaf, disabled } = data || {}
    const moreIcon = loading ? 'loading-3': visible ? 'chevron-down': 'chevron-up'
    const isRenderLeafIcon = isLeaf || (Array.isArray(children) && children.length > 0)
    const checked = selectedValue === value
    return (
      <View className="tree-item">
        <View className="tree-item-content">
          {/* 多选树 */}
          {multiple&&(
            <AtCheckbox 
              options={[{
                label,
                value,
                disabled,
              }]}
              onChange={onChange}
              selectedList={selectedValue||[]}
            />)}
          {/* 单选树 */}
          {!multiple&&(
            <View 
              onClick={() => this.handleRadioTreeChange(value, disabled)} 
              className="tree-item-radio"
            >
              <Text className={cls('label',{checked, disabled})}>
                {label}
              </Text>
              {checked&&(
                <AtIcon value='check' size={checkIconSize} color={checkIconColor}></AtIcon>
              )}
            </View>)}
          {/* 展开收起加载中状态下的图标 */}
          {isRenderLeafIcon&&(
            <View className="tree-item-more" onClick={this.handleToggleMore}>
              <AtIcon value={moreIcon} size={iconSize} color={iconColor} />
            </View>)}
        </View>
        {/* 子级树 */}
        <View className={cls({
          "none": !visible,
        })}>
          <Tree 
            value={selectedValue}
            multiple={multiple}
            onChange={onChange}
            loadData={loadData}
            dataSource={children} 
            treeDefaultExpandAll={treeDefaultExpandAll}
          />
        </View>
      </View>
    )
  }
}