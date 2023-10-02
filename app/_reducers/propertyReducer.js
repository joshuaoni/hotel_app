import { ACTIONS } from '../_actions/propertyActions';

export const propertyReducer = (currentData, action) => {
  switch (action.type) {
    case ACTIONS.ADD_PROPERTIES: {
      return action.payload.data.filter(property => property.city === 'Lagos').splice(0, 6);
    }
    case ACTIONS.FILTER_PROPERTIES: {
      return action.payload.properties.filter(property => {
        const layout = action.payload.layout;
        const city = layout === 1 ? 'Lagos' : layout === 2 ? 'Mumbai' : layout === 3 ? 'New York' : 'London';
        return property.city === city;
      }).splice(0, 6);
    }
    case ACTIONS.SHOW_MORE: {
      return action.payload.properties.filter(property => {
        const layout = action.payload.layout;
        const city = layout === 1 ? 'Lagos' : layout === 2 ? 'Mumbai' : layout === 3 ? 'New York' : 'London';
        return property.city === city;
      });
    }
    default: return currentData;
  }
}