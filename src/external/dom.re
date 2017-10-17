type htmlElement;

type canvasElement;

type document;

external document : document = "" [@@bs.val];

external createElement : document => string => Js.t {..} = "" [@@bs.send];

external querySelectorAll : document => string => option htmlElement =
  "" [@@bs.return null_to_opt] [@@bs.send];

external requestAnimationFrame : (float => unit) => unit = "" [@@bs.val];

external htmlElementToJsObj : htmlElement => Js.t {..} = "%identity";

external htmlElementToCanvasElement : htmlElement => canvasElement = "%identity";

let setInnerHtml eleStr::(eleStr: string) htmlElement => {
  htmlElement##innerHTML#=eleStr;
  htmlElement
};

let getFirstChild htmlElement => htmlElement##firstChild;

let prependTo (sourceElement: htmlElement) targetElement::(targetElement: option htmlElement) =>
  switch targetElement {
  | None => failwith "targetElement should exist"
  | Some targetEle =>
    switch (htmlElementToJsObj sourceElement)##nodeType {
    | 1 =>
      (htmlElementToJsObj targetEle)##prepend sourceElement |> ignore;
      sourceElement
    | _ => sourceElement
    }
  };