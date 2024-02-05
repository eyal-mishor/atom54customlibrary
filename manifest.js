const nodeTypes = {
  ToUpper: {
    category: 'Custom',
    description: 'toupper Node',
    types: {
      toupper$name: 'String'
    },
    type: `$customLibrary/Nodes/ToUpperNode`
  }
};

const services = [];

export { nodeTypes, services };
