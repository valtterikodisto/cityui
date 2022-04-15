/**
 * @license MIT
 * @since 0.0.1
 * @author valtterikodisto (kodisto#5558)
 * @summary Props every React component has.
 */

export interface BaseProps {
  id?: string;
  className?: string;
}

export const getBaseProps = (props: BaseProps) => {
  const { id, className } = props;
  return {
    id,
    className,
  };
};
