import React from 'react';
import { MaterialForm } from './MaterialForm/MaterialForm';
import * as API from 'services/api';
import { MaterialList } from '..';

export class Material extends React.Component {
  state = {
    materials: [],
    isLoading: false,
    error: '',
  };
  addMaterial = async values => {
    try {
      const materials = await API.addMaterial(values);
      console.log(materials);
      this.setState(prevState => ({
        materials: [...prevState.materials, materials],
      }));
    } catch (error) {
      this.setState({ error: error.message });
      console.log(error);
    }
  };
  deleteMaterial = async id => {
    await API.deleteMaterials(id);
    this.setState(prevState => ({
      materials: prevState.materials.filter(material => material.id !== id),
    }));
  };
  updateMaterial = async fileds => {
    try {
      const updatedMaterial = await API.updateMaterials(fileds);
      this.setState(prevState => ({
        materials: prevState.materials.map(material =>
          material.id === fileds.id ? updatedMaterial : material,
        ),
      }));
    } catch (error) {
      console.log(error);
    }
  };
  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterials();
      this.setState({ materials, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { isLoading, materials, error } = this.state;
    return (
      <>
        <MaterialForm onSubmit={this.addMaterial} />
        {isLoading ? (
          <h1>Отправляем</h1>
        ) : (
          <MaterialList
            items={materials}
            onDelete={this.deleteMaterial}
            onUpdate={this.updateMaterial}
          />
        )}
        {error && <h2>Что то пошло не так</h2>}
      </>
    );
  }
}
