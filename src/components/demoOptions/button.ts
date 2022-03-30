// button
const BUTTON_OPTION:Object = {
    name: 'button',
    title: 'Button 按钮',
    description: '按钮用于触发一个操作，如提交表单',
    option: [
        {
            name: 'type',
            title: '基础用法',
            introduction: '',
            description: `
         通过 <code>type</code> 属性控制按钮类型，支持 <code>normal</code>、 <code>text</code>、 <code>link</code>三种类型，默认为 <code>normal</code>。
        `,
            code: `
    <wy-button>default</wy-button>
    <wy-button type="text">text</wy-button>
    <wy-button type="link">link</wy-button>
          `
        },
        {
            name: 'level',
            title: '按钮等级',
            introduction: '突显按钮不同的重要程度/状态',
            description: `使用 <code>level</code> 属性，结合 <code>type</code> 属性显示不同的按钮等级，支持<code>normal</code>、<code>warning</code>、<code>danger</code>、<code>main</code>四种等级`,
            code: `
      <div class="button-line">
        normal:
        <wy-button level="normal">信息</wy-button>
        <wy-button level="warning">警告</wy-button>
        <wy-button level="danger">危险</wy-button>
        <wy-button level="main">成功</wy-button>
      </div>
      <div class="button-line">
        text:
        <wy-button level="normal" type="text">信息</wy-button>
        <wy-button level="warning" type="text">警告</wy-button>
        <wy-button level="danger" type="text">危险</wy-button>
        <wy-button level="main" type="text">成功</wy-button>
      </div>
      <div class="button-line">
        link:
        <wy-button level="normal" type="link">信息</wy-button>
        <wy-button level="warning" type="link">警告</wy-button>
        <wy-button level="danger" type="link">危险</wy-button>
        <wy-button level="main" type="link">成功</wy-button>
      </div>
          `
        },
        {
            name: 'size',
            title: '按钮尺寸',
            introduction: '',
            description: `使用 <code>size</code> 属性改变按钮大小，支持<code>mini</code>、<code>small</code>、<code>normal</code>、<code>large</code>四种尺寸，默认为 <code>normal</code> `,
            code: `
        <wy-button size="normal">迷你按钮</wy-button>
        <wy-button size="small">小型按钮</wy-button>
        <wy-button size="mini">大号按钮</wy-button>
          `
        },
        {
            name: 'disabled',
            title: '禁用状态',
            introduction: '',
            description: `使用 <code>disabled</code> 属性来禁用按钮，禁用状态下按钮不可点击 `,
            code: `
        <wy-button disabled>禁用状态</wy-button>
        <wy-button disabled type="text">禁用状态</wy-button>
        <wy-button disabled type="link">禁用状态</wy-button>
          `
        },
        {
            name: 'loading',
            title: '加载状态',
            introduction: '',
            description: `使用 <code>loading</code> 属性表示加载中的按钮 `,
            code: `
        <wy-button loading>加载中...</wy-button>
          `
        }
    ]
}

export default BUTTON_OPTION
