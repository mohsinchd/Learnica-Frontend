import React from "react";

import { Table, Dropdown } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { deleteSection } from "../../../redux/reducers/courseSections/courseSectionsSlice";

const InstCourseSectionTable = ({ sections, courseId, editSection }) => {
  const dispatch = useDispatch();

  const editSectionTitle = (id, title) => {
    editSection(id, title);
  };
  return (
    <>
      <h3 className="text-center">Course Sections</h3>
      {sections.length === 0 ? (
        <h4>No Sections for this course.</h4>
      ) : (
        <Table responsive striped hover>
          <thead>
            <th>Section Titles</th>
            <th></th>
          </thead>
          <tbody>
            {sections.map((section) => (
              <tr id={section._id}>
                <td>{section.title}</td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="primary"
                      size="sm"
                      id="inst-course-table-dropdown"
                    >
                      <BsThreeDots size={20} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <Link
                          to={`/instructorCourse/lectures/${courseId}/${section._id}`}
                        >
                          Add Lecture
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() =>
                          editSectionTitle(section._id, section.title)
                        }
                      >
                        Edit Section
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() =>
                          dispatch(
                            deleteSection({
                              courseId: courseId,
                              sectionId: section._id,
                            })
                          )
                        }
                      >
                        Delete section
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default InstCourseSectionTable;
