import type { BaseNode } from "../components/nodes";
import type { FlowEdge } from "../components/nodes";

export const edges: FlowEdge[] = [
  {
    "id": "e-imports-default",
    "source": "node-imports",
    "target": "node-get-handler"
  },
  {
    "id": "e-handler-params",
    "source": "node-get-handler",
    "target": "node-extract-params"
  },
  {
    "id": "e-params-fetch",
    "source": "node-extract-params",
    "target": "node-fetch-users"
  },
  {
    "id": "e-fetch-find-user",
    "source": "node-fetch-users",
    "target": "node-find-user"
  },
  {
    "id": "e-find-success",
    "source": "node-find-user",
    "target": "node-response-success"
  },
  {
    "id": "e-find-error",
    "source": "node-find-user",
    "target": "node-response-error"
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
          "from": "next/server",
          "what": [
            {
              "name": "NextResponse",
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
    "id": "node-get-handler",
    "type": "Default Export",
    "isFixed": true,
    "fixedOrder": 1,
    "position": {
      "x": 150,
      "y": 0
    },
    "data": {
      "name": "GET",
      "params": [
        {
          "name": "request",
          "tsType": "Request"
        }
      ],
      "async": true,
      "returnType": "Promise<NextResponse>",
      "color": "#aa5bff"
    },
    "draggable": false,
    "selectable": true,
    "width": 96,
    "height": 64
  },
  {
    "id": "node-extract-params",
    "type": "Function",
    "position": {
      "x": 300,
      "y": 0
    },
    "data": {
      "name": "Extract SearchParams",
      "params": [],
      "async": false,
      "body": "const { searchParams } = new URL(request.url);\nconst username = searchParams.get('username');\nconst password = searchParams.get('password');",
      "color": "#0b79d0"
    },
    "draggable": true,
    "selectable": true,
    "width": 96,
    "height": 46
  },
  {
    "id": "node-fetch-users",
    "type": "CRUD",
    "position": {
      "x": 450,
      "y": 0
    },
    "data": {
      "url": "${process.env.NEXT_PUBLIC_BASE_URL}/users.json",
      "method": "GET",
      "assignTo": "data",
      "color": "#8f6adf"
    },
    "draggable": true,
    "selectable": true,
    "width": 96,
    "height": 46
  },
  {
    "id": "node-find-user",
    "type": "If Else",
    "position": {
      "x": 600,
      "y": 0
    },
    "data": {
      "condition": "data.users.find((u: any) => u.email === username && u.password === password)",
      "trueBranch": "node-response-success",
      "falseBranch": "node-response-error",
      "color": "#d4af37"
    },
    "draggable": true,
    "selectable": true,
    "width": 96,
    "height": 46
  },
  {
    "id": "node-response-success",
    "type": "Return",
    "position": {
      "x": 727.3201915868733,
      "y": 49.98135330515689
    },
    "data": {
      "value": "NextResponse.json(user)",
      "color": "#2d8f4a"
    },
    "draggable": true,
    "selectable": true,
    "width": 96,
    "height": 46,
    "selected": false,
    "positionAbsolute": {
      "x": 727.3201915868733,
      "y": 49.98135330515689
    },
    "dragging": false
  },
  {
    "id": "node-response-error",
    "type": "Return",
    "position": {
      "x": 728.8359081533838,
      "y": 0.03729338968624418
    },
    "data": {
      "value": "NextResponse.json({ error: \"Invalid credentials\" }, { status: 401 })",
      "color": "#d32f2f"
    },
    "draggable": true,
    "selectable": true,
    "width": 96,
    "height": 46,
    "selected": false,
    "dragging": false,
    "positionAbsolute": {
      "x": 728.8359081533838,
      "y": 0.03729338968624418
    }
  }
];
