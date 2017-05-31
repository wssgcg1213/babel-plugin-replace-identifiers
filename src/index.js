/**
 * Created at 16/9/39.
 * @Author Ling.
 * @Email i@zeroling.com
 */

export default ({types: t}) => ({
  visitor: {
    Identifier(path, state) {
      const newId = state.opts.hasOwnProperty(path.node.name) && state.opts[path.node.name];
      if (newId) {
        path.replaceWith(t.identifier(newId))
      }
    }
  }
});