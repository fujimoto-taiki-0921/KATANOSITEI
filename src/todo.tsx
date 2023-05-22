// propsに対してなにが必要なのかを明示的に型指定してあげる
import { TodoType } from "./Types/Todo";
import { VFC } from "react";
// ここでTodotypeをpropsに渡してかたを指定
export const Todo = (props: VFC<Omit<TodoType, "id">>) => {
  const { title, userId, completed } = props;
  const compleateMark = completed ? "[完]" : "[未]";
  return <p>{`${compleateMark} ${title}(ユーザー:${userId})`}</p>;
};
