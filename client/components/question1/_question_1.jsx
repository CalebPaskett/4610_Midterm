import { Counter } from "./Counter";


export const Question1 = () => {
  return (
  <div>
    <div>
      <Counter min={-5} max={5} />
      <Counter min={-15} max={-5} />
      <Counter min={5} max={15} />
    </div>
  </div>)
  ;
};
