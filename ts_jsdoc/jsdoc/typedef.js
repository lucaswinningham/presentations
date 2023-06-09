// @ts-check

/**
 * @typedef {{
 *   name: string;
 *   age?: number;
 *   alive?: boolean;
 * }} UserProps
 */

/** @typedef {{ enabled?: boolean }} Configuration */

class User extends React.Component {
  /** @param {UserProps} props */
  constructor(props) { super(props); }

  /** @type {(configuration: Configuration) => void} */
  configure({ enabled }) {}

  /** @type {(todo: { what: string; dueBy?: Date; }) => void} */
  performTask(aTodo) {}
}