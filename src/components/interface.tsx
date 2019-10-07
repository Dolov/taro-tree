

interface ITree {
  value: any;
  onChange: Function;
  dataSource: Array<Ichild>;
  multiple?: boolean;
  loadData?: Function;
  treeDefaultExpandAll?: boolean;
}




interface Ichild {
  label: string,
  value: string | number,
  isLeaf?: boolean;
  children?: Array<Ichild>,
}



interface ITreeItem {
  [otherProps: string]: any;
}



export {
  ITree,
  Ichild,
  ITreeItem,
}