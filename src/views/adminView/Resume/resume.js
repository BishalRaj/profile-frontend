import { Form, Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { AddResume, UpdateResume } from "../../../Actions/resumeAction";
import { connect } from "react-redux";
import ShowResumeContent from "../../mainView/Resume/resume";
import { MdAdd } from "react-icons/md";

function Resume(props) {
  const [rId, setRid] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [degree, setDegree] = useState("");
  const [university, setUniversity] = useState("");
  const [description, setDescription] = useState("");
  const [show, setShow] = useState(false);
  const [isUpdateBtn, setIsUpdateBtn] = useState(false);
  const [isAddBtn, setIsAddBtn] = useState(false);

  function handleFromInput(e) {
    setFrom(e.target.value);
  }
  function handleToInput(e) {
    setTo(e.target.value);
  }
  function handleDegreeInput(e) {
    setDegree(e.target.value);
  }
  function handleUniversityInput(e) {
    setUniversity(e.target.value);
  }
  function handleDescriptionInput(e) {
    setDescription(e.target.value);
  }

  function onSubmit() {
    const data = {
      from: from,
      to: to,
      degree: degree,
      university: university,
      description: description,
    };
    props.AddResume(data, props.resume, props.uid);
  }

  function onUpdate() {
    const data = {
      id: rId,
      from: from,
      to: to,
      degree: degree,
      university: university,
      description: description,
    };

    props.UpdateResume(data, props.resume, props.uid);
  }

  function addButtonClick() {
    setIsAddBtn(true);
    setIsUpdateBtn(false);
    setShow(true);
  }

  function populateUpdateData(data, index) {
    setRid(data._id);
    setFrom(data.from);
    setTo(data.to);
    setDegree(data.degree);
    setUniversity(data.university);
    setDescription(data.description);
    setIsUpdateBtn(true);
    setIsAddBtn(false);
    setShow(true);

    console.log(index);
  }

  function clearState() {
    setFrom("");
    setTo("");
    setDegree("");
    setUniversity("");
    setDescription("");
  }

  function closeModal() {
    clearState();
    setShow(false);
    setIsUpdateBtn(false);
    setIsAddBtn(false);
  }

  return (
    <>
      <button
        className="btn btn-white shadow rounded my-2 p-2"
        onClick={addButtonClick}
      >
        <MdAdd color="#1773ea" size="25px" /> Add Resume
      </button>

      <Modal
        show={show}
        onHide={closeModal}
        dialogClassName="modal-90w"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add your new Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              {/* id */}
              <Form.Control type="text" value={rId} hidden={true} />

              <Form.Label>Career Joined in</Form.Label>
              <Form.Control
                type="number"
                value={from}
                onChange={handleFromInput}
                min="2000"
                max={new Date().getFullYear()}
                placeholder="2020"
              />

              <Form.Label>Career Ended in</Form.Label>
              <Form.Control
                type="number"
                value={to}
                onChange={handleToInput}
                min="2000"
                max={new Date().getFullYear()}
                placeholder="2020"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>degree</Form.Label>
              <Form.Control
                type="text"
                value={degree}
                onChange={handleDegreeInput}
                placeholder="degree"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>university</Form.Label>
              <Form.Control
                type="text"
                value={university}
                onChange={handleUniversityInput}
                placeholder="University Name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={handleDescriptionInput}
                placeholder="description"
              />
            </Form.Group>
            {isAddBtn ? (
              <Button
                variant="success"
                size="lg"
                className="float-right"
                onClick={onSubmit}
              >
                Submit
              </Button>
            ) : isUpdateBtn ? (
              <Button
                variant="warning"
                size="lg"
                className="float-right"
                onClick={onUpdate}
              >
                Update
              </Button>
            ) : (
              ""
            )}
          </Form>
        </Modal.Body>
      </Modal>

      <ShowResumeContent populateUpdateData={populateUpdateData} />
    </>
  );
}

function mapStateToProps(state) {
  const { id } = state.auth.user;
  return {
    uid: id,
    resume: state.resume,
  };
}

export default connect(mapStateToProps, { AddResume, UpdateResume })(Resume);
