//import { TreeProps } from './Tree';

export const classNames = {
  treeContainer: 'react-organizational-chart--tree-container',
};

export function buildCSS(
  lineHeight?: string,
  lineWidth?: string,
  lineColor?: string,
  lineBorderRadius?: string,
  nodePadding?: string
) {
  const css = `.${classNames.treeContainer}{
    padding-inline-start: 0;
  margin: 0;

  --line-height: ${lineHeight};
  --line-width: ${lineWidth};
  --line-color: ${lineColor};
  --line-border-radius: ${lineBorderRadius};
  --node-padding: ${nodePadding};

  --tree-line-height: var(--line-height, 20px);
  --tree-line-width: var(--line-width, 1px);
  --tree-line-color: var(--line-color, black);
  --tree-line-border-radius: var(--line-border-radius, 5px);
  --tree-node-padding: var(--node-padding, 5px);
  }`;
  const head = document.head;
  const element = document.createElement('style');
  element.appendChild(document.createTextNode(css));
  head.appendChild(element);
}
