import type { BaseNode } from "../components/nodes";
import type { FlowEdge } from "../components/nodes";

export const edges: FlowEdge[] = [
  {
    "id": "e-imports-default",
    "source": "node-imports",
    "target": "node-default-export"
  },
  {
    "id": "e-default-objects",
    "source": "node-default-export",
    "target": "node-objects"
  },
  {
    "id": "e-objects-return",
    "source": "node-objects",
    "target": "node-return"
  },
  {
    "id": "e-return-jsx",
    "source": "node-return",
    "target": "node-jsx-root"
  },
  {
    "id": "e-jsx-container",
    "source": "node-jsx-root",
    "target": "node-container"
  },
  {
    "id": "e-container-btn1",
    "source": "node-container",
    "target": "node-button-1"
  },
  {
    "id": "e-container-btn2",
    "source": "node-container",
    "target": "node-button-2"
  }
];

export const flow: BaseNode[] = [
  {
    "id": "node-imports",
    "type": "Imports",
    "isFixed": true,
    "fixedOrder": 0,
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "imports": [
        {
          "from": "next/navigation",
          "what": [
            {
              "name": "useRouter",
              "isDefault": false
            }
          ]
        }
      ],
      "color": "#aa5bff"
    },
    "draggable": false,
    "selectable": true,
    "width": 96,
    "height": 46
  },
  {
    "id": "node-default-export",
    "type": "Default Export",
    "isFixed": true,
    "fixedOrder": 1,
    "position": {
      "x": 150,
      "y": 0
    },
    "data": {
      "name": "Page",
      "params": [],
      "async": false,
      "returnType": "JSX.Element",
      "color": "#aa5bff"
    },
    "draggable": false,
    "selectable": true,
    "width": 96,
    "height": 64
  },
  {
    "id": "node-objects",
    "type": "Objects",
    "isFixed": true,
    "fixedOrder": 2,
    "position": {
      "x": 300,
      "y": 0
    },
    "data": {
      "objects": [
        {
          "name": "router",
          "initialValue": "useRouter()",
          "tsType": "ReturnType<typeof useRouter>"
        }
      ],
      "color": "#5b91ff"
    },
    "draggable": false,
    "selectable": true,
    "width": 96,
    "height": 46
  },
  {
    "id": "node-return",
    "type": "Return",
    "position": {
      "x": 450,
      "y": 0
    },
    "data": {
      "value": "node-jsx-root",
      "color": "#aa5bff"
    },
    "draggable": true,
    "selectable": true,
    "width": 96,
    "height": 46
  },
  {
    "id": "node-jsx-root",
    "type": "Element Root",
    "position": {
      "x": 588.3223170873911,
      "y": -9.342146330087147
    },
    "data": {
      "children": [
        "node-container"
      ],
      "color": "#efff74"
    },
    "draggable": true,
    "selectable": true,
    "width": 96,
    "height": 64,
    "selected": false,
    "positionAbsolute": {
      "x": 588.3223170873911,
      "y": -9.342146330087147
    },
    "dragging": false
  },
  {
    "id": "node-container",
    "type": "jsxElement",
    "position": {
      "x": 713.2735242523066,
      "y": -0.904938931958128
    },
    "data": {
      "tag": "div",
      "styles": {
        "display": "flex",
        "flexDirection": "col",
        "alignItems": "center",
        "justifyContent": "center",
        "height": "20",
        "width": "full",
        "paddingY": "2"
      },
      "props": [],
      "events": [],
      "children": [
        "node-button-1",
        "node-button-2"
      ],
      "color": "#afafaf"
    },
    "draggable": true,
    "selectable": true,
    "width": 96,
    "height": 46,
    "selected": false,
    "positionAbsolute": {
      "x": 713.2735242523066,
      "y": -0.904938931958128
    },
    "dragging": false
  },
  {
    "id": "node-button-1",
    "type": "jsxElement",
    "position": {
      "x": 837.582621844567,
      "y": -0.9049389319581422
    },
    "data": {
      "tag": "button",
      "styles": {
        "paddingX": "4",
        "paddingY": "2",
        "backgroundColor": "blue-500",
        "textColor": "white",
        "borderRadius": "",
        "customClasses": "hover:bg-blue-600"
      },
      "props": [],
      "events": [
        {
          "name": "onClick",
          "handler": "() => router.push('/')"
        }
      ],
      "children": [],
      "color": "#afafaf"
    },
    "draggable": true,
    "selectable": true,
    "width": 96,
    "height": 46,
    "selected": false,
    "positionAbsolute": {
      "x": 837.582621844567,
      "y": -0.9049389319581422
    },
    "dragging": false
  },
  {
    "id": "node-button-2",
    "type": "jsxElement",
    "position": {
      "x": 838.750390135828,
      "y": 56.57853669912845
    },
    "data": {
      "tag": "button",
      "styles": {
        "paddingX": "4",
        "paddingY": "2",
        "backgroundColor": "green-500",
        "textColor": "white",
        "borderRadius": "",
        "marginTop": "2",
        "customClasses": "hover:bg-green-600"
      },
      "props": [],
      "events": [
        {
          "name": "onClick",
          "handler": "() => router.push('/landing')"
        }
      ],
      "children": [],
      "color": "#afafaf"
    },
    "draggable": true,
    "selectable": true,
    "width": 96,
    "height": 46,
    "selected": false,
    "positionAbsolute": {
      "x": 838.750390135828,
      "y": 56.57853669912845
    },
    "dragging": false
  }
];
