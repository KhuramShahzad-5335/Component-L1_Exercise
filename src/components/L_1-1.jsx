export const ArrowFunc = () => {
  return (
    <div>
      <h3>Arrow Function</h3>
      <p>
        The arrow function handles <i>this</i> differently and there is an
        syntax difference.
      </p>
    </div>
  );
};

export default function RegularFunc() {
  return (
    <div>
      <h2>Regular Function</h2>
      <p>
        Regular Function Deals with <i>this</i> differny. We may need to use{" "}
        <i>.bind</i> method sometimes. Other differences are just the syntax.
      </p>
    </div>
  );
}
