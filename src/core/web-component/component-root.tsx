import { useContext, useEffect, useMemo } from "react";
import { ComponentContext } from "../startup/component-context";

/**
 * Root element of components shareable as custom element. Depending on the context this component is created,
 * it creates a root element or skip it to avoid redundancy in tag declaration.
 * @param props
 * @constructor
 */
export const ComponentRoot = (props: {
  elementName: string;
  children?: unknown;
  style?: Partial<HTMLElement["style"]> | string;
  title?: HTMLElement["title"];
  dangerouslySetInnerHTML?: { __html: string };
  className?: any;
  id?: string;
}) => {
  /** The component context. */
  const componentContext = useContext(ComponentContext);

  /** The tag name of the root element. */
  const RootElement = props.elementName as any;

  /** The initial classes (only available if custom element) */
  const initialClassNames = useMemo(
    () => componentContext?.customElement?.getAttribute("class"),
    [componentContext?.customElement]
  );

  useEffect(() => {
    if (componentContext?.customElement) {
      // Custom element case: the class value is forwarded to host element
      componentContext?.customElement.setAttribute(
        "class",
        `${initialClassNames} ${props.className || ""}`
      );
    }
    // DB: props.style instance is gonna change at each render pass...
  }, [componentContext, props.className, initialClassNames]);

  // Rendering the root element.
  return !componentContext?.customElement ? (
    // The regular way
    <RootElement
      onClick={(e: MouseEvent) => e.stopPropagation()}
      style={props.style}
      title={props.title}
      class={props.className}
      dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}
      id={props.id}
    >
      {props.children}
    </RootElement>
  ) : //The webcomponent way
  props.dangerouslySetInnerHTML?.__html ? (
    <div
      ref={(e) =>
        (((e as HTMLDivElement).parentElement as HTMLElement).innerHTML = props
          .dangerouslySetInnerHTML?.__html as string)
      }
    />
  ) : (
    <>{props.children}</>
  );
};
