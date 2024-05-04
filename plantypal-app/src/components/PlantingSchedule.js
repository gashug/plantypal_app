// src/components/PlantingSchedule.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePlantingSchedule } from '../redux/actions/gardenActions';

class PlantingSchedule extends Component {
  handleScheduleUpdate = () => {
    const { selectedGarden, updateSchedule } = this.props;
    // Dispatch action to update planting schedule
    updateSchedule(selectedGarden._id, updatedScheduleData);
  };

  render() {
    const { selectedGarden } = this.props;

    if (!selectedGarden) {
      return <div>No garden selected.</div>;
    }

    return (
      <div>
        <h2>Planting Schedule for {selectedGarden.name}</h2>
        {/* Display and manage planting schedules (sowDate, transplantDate, harvestDate) */}
        <button onClick={this.handleScheduleUpdate}>Update Schedule</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedGarden: state.gardens.selectedGarden,
});

const mapDispatchToProps = (dispatch) => ({
  updateSchedule: (gardenId, updatedScheduleData) =>
    dispatch(updatePlantingSchedule(gardenId, updatedScheduleData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlantingSchedule);
