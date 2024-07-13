import { Dropdown } from "flowbite-react";

export default function JobCategoryComponent({ categories }) {
  return (
    <div className="">
      <Dropdown label="Job category" inline dismissOnClick={false}>
        {categories.map((category) => (
          <Dropdown.Item key={category.id}>
            {category.category_name}
          </Dropdown.Item>
        ))}
      </Dropdown>
    </div>
  );
}
