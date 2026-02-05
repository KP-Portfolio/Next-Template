import type { BaseNode } from "../components/nodes";
import type { FlowEdge } from "../components/nodes";

export const edges: FlowEdge[] = [
  {
    "id": "e-imports-types",
    "source": "node-imports",
    "target": "node-types"
  },
  {
    "id": "e-types-default",
    "source": "node-types",
    "target": "node-default-export"
  },
  {
    "id": "e-default-objects",
    "source": "node-default-export",
    "target": "node-objects"
  },
  {
    "id": "e-objects-states",
    "source": "node-objects",
    "target": "node-states"
  },
  {
    "id": "e-states-handler",
    "source": "node-states",
    "target": "node-handle-signin"
  },
  {
    "id": "e-handler-fetch",
    "source": "node-handle-signin",
    "target": "node-fetch-users"
  },
  {
    "id": "e-fetch-then",
    "source": "node-fetch-users",
    "target": "node-then-response"
  },
  {
    "id": "e-then-if",
    "source": "node-then-response",
    "target": "node-if-response-ok"
  },
  {
    "id": "e-if-true-push",
    "source": "node-if-response-ok",
    "target": "node-router-push-home"
  },
  {
    "id": "e-if-false-alert",
    "source": "node-if-response-ok",
    "target": "node-alert-invalid"
  },
  {
    "id": "e-fetch-catch",
    "source": "node-fetch-users",
    "target": "node-catch-error"
  },
  {
    "id": "e-catch-log",
    "source": "node-catch-error",
    "target": "node-log-error"
  },
  {
    "id": "e-log-alert",
    "source": "node-log-error",
    "target": "node-alert-error"
  },
  {
    "id": "e-handler-return",
    "source": "node-alert-invalid",
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
    "id": "e-container-title",
    "source": "node-container",
    "target": "node-title"
  },
  {
    "id": "e-container-input-email",
    "source": "node-container",
    "target": "node-input-email"
  },
  {
    "id": "e-container-input-password",
    "source": "node-container",
    "target": "node-input-password"
  },
  {
    "id": "e-container-button",
    "source": "node-container",
    "target": "node-button-signin"
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
        },
        {
          "from": "react",
          "what": [
            {
              "name": "useState",
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
    "height": 46,
    "selected": false
  },
  {
    "id": "node-types",
    "type": "Type",
    "isFixed": true,
    "fixedOrder": 1,
    "position": {
      "x": 150,
      "y": 0
    },
    "data": {
      "name": "",
      "kind": "interface",
      "fields": [],
      "color": "#ffb347"
    },
    "draggable": false,
    "selectable": true,
    "width": 96,
    "height": 46
  },
  {
    "id": "node-objects",
    "type": "Objects",
    "isFixed": true,
    "fixedOrder": 4,
    "position": {
      "x": 450,
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
    "id": "node-states",
    "type": "States",
    "isFixed": true,
    "fixedOrder": 5,
    "position": {
      "x": 600,
      "y": 0
    },
    "data": {
      "states": [
        {
          "name": "email",
          "initialValue": "useState(\"\")",
          "tsType": "string"
        },
        {
          "name": "setEmail",
          "initialValue": "setState",
          "tsType": "Dispatch<SetStateAction<string>>"
        },
        {
          "name": "password",
          "initialValue": "useState(\"\")",
          "tsType": "string"
        },
        {
          "name": "setPassword",
          "initialValue": "setState",
          "tsType": "Dispatch<SetStateAction<string>>"
        }
      ],
      "color": "#ffb347"
    },
    "draggable": false,
    "selectable": true,
    "width": 96,
    "height": 46,
    "selected": false
  },
  {
    "id": "node-default-export",
    "type": "Default Export",
    "isFixed": true,
    "fixedOrder": 3,
    "position": {
      "x": 300,
      "y": -9
    },
    "data": {
      "name": "Landing",
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
    "id": "node-handle-signin",
    "type": "Function",
    "position": {
      "x": 750,
      "y": 0
    },
    "data": {
      "name": "handleSignIn",
      "params": [],
      "async": false,
      "body": "",
      "color": "#0b79d0"
    },
    "draggable": true,
    "selectable": true,
    "width": 96,
    "height": 46,
    "selected": false,
    "dragging": false
  },
  {
    "id": "node-fetch-users",
    "type": "CRUD",
    "position": {
      "x": 900,
      "y": 0
    },
    "data": {
      "url": "/api/users",
      "method": "GET",
      "queryParams": {
        "username": "encodeURIComponent(email)",
        "password": "encodeURIComponent(password)"
      },
      "assignTo": "response",
      "color": "#8f6adf"
    },
    "draggable": true,
    "selectable": true,
    "width": 96,
    "height": 46,
    "selected": false,
    "dragging": false
  },
  {
    "id": "node-then-response",
    "type": "Then",
    "position": {
      "x": 1050,
      "y": 0
    },
    "data": {
      "body": "// Handle fetch response",
      "color": "#00aaff"
    },
    "draggable": true,
    "selectable": true,
    "width": 96,
    "height": 46,
    "selected": false,
    "dragging": false
  },
  {
    "id": "node-if-response-ok",
    "type": "If Else",
    "position": {
      "x": 1200,
      "y": 0
    },
    "data": {
      "condition": "response.ok",
      "trueBranch": "node-router-push-home",
      "falseBranch": "node-alert-invalid",
      "color": "#d4af37"
    },
    "draggable": true,
    "selectable": true,
    "width": 96,
    "height": 46,
    "selected": false,
    "dragging": false
  },
  {
    "id": "node-router-push-home",
    "type": "Router",
    "position": {
      "x": 1351,
      "y": 0.9999999999999432
    },
    "data": {
      "action": "push",
      "path": "/home",
      "color": "#2d8f4a"
    },
    "draggable": true,
    "selectable": true,
    "width": 96,
    "height": 46,
    "selected": false,
    "positionAbsolute": {
      "x": 1351,
      "y": 0.9999999999999432
    },
    "dragging": false
  },
  {
    "id": "node-alert-invalid",
    "type": "Alert",
    "position": {
      "x": 1350,
      "y": 52.85130164500296
    },
    "data": {
      "message": "Invalid credentials",
      "color": "#e74c3c"
    },
    "draggable": true,
    "selectable": true,
    "width": 96,
    "height": 46,
    "selected": false,
    "positionAbsolute": {
      "x": 1350,
      "y": 52.85130164500296
    },
    "dragging": false
  },
  {
    "id": "node-catch-error",
    "type": "Catch",
    "position": {
      "x": 1050.0000000000005,
      "y": 105.99999999999997
    },
    "data": {
      "body": "// Handle fetch error",
      "color": "#ff6b6b"
    },
    "draggable": true,
    "selectable": true,
    "width": 96,
    "height": 46,
    "selected": false,
    "positionAbsolute": {
      "x": 1050.0000000000005,
      "y": 105.99999999999997
    },
    "dragging": false
  },
  {
    "id": "node-log-error",
    "type": "Log",
    "position": {
      "x": 1200,
      "y": 106
    },
    "data": {
      "message": "Error during sign-in:",
      "color": "#f1c40f"
    },
    "draggable": true,
    "selectable": true,
    "width": 96,
    "height": 46,
    "selected": false,
    "positionAbsolute": {
      "x": 1200,
      "y": 106
    },
    "dragging": false
  },
  {
    "id": "node-alert-error",
    "type": "Alert",
    "position": {
      "x": 1349,
      "y": 105.99999999999997
    },
    "data": {
      "message": "An error occurred during sign-in.",
      "color": "#e74c3c"
    },
    "draggable": true,
    "selectable": true,
    "width": 96,
    "height": 46,
    "selected": false,
    "positionAbsolute": {
      "x": 1349,
      "y": 105.99999999999997
    },
    "dragging": false
  },
  {
    "id": "node-return",
    "type": "Return",
    "position": {
      "x": 1471.9999999999995,
      "y": 53.99999999999996
    },
    "data": {
      "value": "node-jsx-root",
      "color": "#aa5bff"
    },
    "draggable": true,
    "selectable": true,
    "width": 96,
    "height": 46,
    "selected": false,
    "positionAbsolute": {
      "x": 1471.9999999999995,
      "y": 53.99999999999996
    },
    "dragging": false
  },
  {
    "id": "node-jsx-root",
    "type": "Element Root",
    "position": {
      "x": 1598.9999999999993,
      "y": 44.99999999999997
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
      "x": 1598.9999999999993,
      "y": 44.99999999999997
    },
    "dragging": false
  },
  {
    "id": "node-container",
    "type": "jsxElement",
    "position": {
      "x": 1735.9999999999995,
      "y": 54.00000000000003
    },
    "data": {
      "tag": "div",
      "props": [
        {
          "name": "className",
          "value": "flex flex-col items-center justify-center h-screen w-full py-2 bg-gray-100",
          "isExpression": false
        }
      ],
      "events": [],
      "children": [
        "node-title",
        "node-input-email",
        "node-input-password",
        "node-button-signin"
      ],
      "color": "#afafaf"
    },
    "draggable": true,
    "selectable": true,
    "width": 96,
    "height": 46,
    "selected": false,
    "positionAbsolute": {
      "x": 1735.9999999999995,
      "y": 54.00000000000003
    },
    "dragging": false
  },
  {
    "id": "node-title",
    "type": "jsxElement",
    "position": {
      "x": 1870.9999999999998,
      "y": 54.00000000000003
    },
    "data": {
      "tag": "h1",
      "props": [
        {
          "name": "className",
          "value": "text-3xl font-bold mb-6",
          "isExpression": false
        }
      ],
      "events": [],
      "children": [],
      "color": "#afafaf"
    },
    "draggable": true,
    "selectable": true,
    "width": 96,
    "height": 46,
    "selected": false,
    "positionAbsolute": {
      "x": 1870.9999999999998,
      "y": 54.00000000000003
    },
    "dragging": false
  },
  {
    "id": "node-input-email",
    "type": "jsxElement",
    "position": {
      "x": 1869.9999999999998,
      "y": 102.00000000000003
    },
    "data": {
      "tag": "input",
      "props": [
        {
          "name": "type",
          "value": "email",
          "isExpression": false
        },
        {
          "name": "placeholder",
          "value": "Email",
          "isExpression": false
        },
        {
          "name": "value",
          "value": "email",
          "isExpression": true
        },
        {
          "name": "className",
          "value": "px-4 py-2 border border-gray-300 rounded mb-4 w-64",
          "isExpression": false
        }
      ],
      "events": [
        {
          "name": "onChange",
          "handler": "(e) => setEmail(e.target.value)"
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
      "x": 1869.9999999999998,
      "y": 102.00000000000003
    },
    "dragging": false
  },
  {
    "id": "node-input-password",
    "type": "jsxElement",
    "position": {
      "x": 1870.9999999999998,
      "y": 150.00000000000009
    },
    "data": {
      "tag": "input",
      "props": [
        {
          "name": "type",
          "value": "password",
          "isExpression": false
        },
        {
          "name": "placeholder",
          "value": "Password",
          "isExpression": false
        },
        {
          "name": "value",
          "value": "password",
          "isExpression": true
        },
        {
          "name": "className",
          "value": "px-4 py-2 border border-gray-300 rounded mb-4 w-64",
          "isExpression": false
        }
      ],
      "events": [
        {
          "name": "onChange",
          "handler": "(e) => setPassword(e.target.value)"
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
      "x": 1870.9999999999998,
      "y": 150.00000000000009
    },
    "dragging": false
  },
  {
    "id": "node-button-signin",
    "type": "jsxElement",
    "position": {
      "x": 1870.9999999999998,
      "y": 200.0000000000001
    },
    "data": {
      "tag": "button",
      "props": [
        {
          "name": "className",
          "value": "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",
          "isExpression": false
        }
      ],
      "events": [
        {
          "name": "onClick",
          "handler": "handleSignIn"
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
      "x": 1870.9999999999998,
      "y": 200.0000000000001
    },
    "dragging": false
  }
];
