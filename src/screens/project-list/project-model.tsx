import { Button, Drawer } from "antd";

export const ProjectModel = (props: {
  projectModalOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Drawer
      onClose={props.onClose}
      visible={props.projectModalOpen}
      width={"100%"}
    >
      <h1>Pro</h1>
      <Button onClick={props.onClose}>关闭</Button>
    </Drawer>
  );
};
