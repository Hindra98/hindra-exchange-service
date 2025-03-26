type ItemFooter = {
  name: React.JSX.Element | string;
};

type Props = {
  itemLeft: ItemFooter[];
  itemCenter: ItemFooter[];
  itemRight: ItemFooter[];
  className: string;
};

const FooterItem = ({ name }: ItemFooter) => {
  return <p>{name}</p>;
};

const FooterAuth = ({
  itemLeft = [],
  itemCenter = [],
  itemRight = [],
  className
}: Props) => {
  return (
    <footer className={"footerauth flex flex-row gap-2 w-full items-center px-5 py-3" + className}>
      <div className={"flex flex-row justify-start gap-2 items-center me-auto"}>
        {itemLeft.map((item, key) => (
          <div key={key+10} className={"flex flex-row justify-start gap-2 items-center me-auto"}>
            <FooterItem name={item.name}/>
            {itemLeft.length - 1 > key && <p>|</p>}
          </div>
        ))}
      </div>
      <div className={"flex flex-row justify-start gap-2 items-center mx-auto"}>
        {itemCenter.map((item, key) => (
          <div key={key+10} className={"flex flex-row justify-start gap-2 items-center mx-auto"}>
            <FooterItem name={item.name}/>
            {itemCenter.length - 1 > key && <p>|</p>}
          </div>
        ))}
      </div>
      <div className={"flex flex-row justify-start gap-2 items-center ms-auto"}>
        {itemRight.map((item, key) => (
          <div key={key+10} className={"flex flex-row justify-start gap-2 items-center ms-auto"}>
            <FooterItem name={item.name} />
            {itemRight.length - 1 > key && <p>|</p>}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default FooterAuth;
