import metashape from "../images/products/metashape_logo.png";
import simactive from "../images/products/simactive_logo.png";
import globalMapper from "../images/products/global_mapper_pro_logo.png";
import training from "../images/products/training_logo.png";

const productData = [
  {
    id: 1,
    title: "Metashape",
    description:
      "Photogrammetric processing of digital images and 3D spatial data generation",
    image: metashape,
    alt: "Metashape 로고",
  },
  {
    id: 2,
    title: "Correlator3D",
    description:
      "Rapid processing of imagery from drones, aircrafts and satellites",
    image: simactive,
    alt: "simactive 로고",
  },
  {
    id: 3,
    title: "Global Mapper",
    description: "Essential Software for Spatial information",
    image: globalMapper,
    alt: "globalmapper 로고",
  },
  {
    id: 4,
    title: "Training & Education",
    description:
      "You can meet basic, advanced and specialized courses related to drones",
    image: training,
    alt: "training 로고",
  },
];

export default productData;
