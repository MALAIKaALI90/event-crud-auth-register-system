import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { RiDeleteBin5Fill, RiEdit2Fill, RiSaveFill, RiCloseFill } from "react-icons/ri";

const ListMenu = ({ token }) => {
  const [editableId, setEditableId] = useState(null);
  const [list, setList] = useState([]);
  const [editData, setEditData] = useState({
    title: "",
    discription: "",
 location:"",
    image: ""
  });

  const fetchList = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/product/get", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        setList(response.data.allEvents || []);
      } else {
        toast.error(response.data.message || "Failed to fetch events");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  useEffect(() => {
    fetchList();    
  }, []);

  const deleteEvent = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/product/remove/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        toast.success(response.data.message || "Event deleted successfully");
        setList((prevList) => prevList.filter((item) => item._id !== id));
      } else {
        toast.error(response.data.message || "Failed to delete event");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  const handleEdit = (item) => {
    setEditableId(item._id);
    setEditData({
      title: item.title,
      discription: item.discription || "",
     location:item.location,
      image: item.image
    });
  };

  const cancelEdit = () => {
    setEditableId(null);
    setEditData({
      title: "",
      discription: "",
     location:"",
      image: ""
    });
  };

  const saveEdit = async (id) => {
    try {
      const updatedData = {
        discription: editData.discription,
        title: editData.title,
      location:editData.location,
        image: editData.image,
       
      };

      const response = await axios.put(`http://localhost:3000/api/product/edit/${id}`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.data.success) {
        setList((prevList) => 
          prevList.map((item) => 
            item._id === id ? { ...item, ...updatedData } : item
          )
        );
        setEditableId(null);
        setEditData({
          title: "",
          discription: "",
       location:"",
          image: ""
        });
        toast.success("Event updated successfully");
      } else {
        toast.error(response.data.message || "Failed to update event");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  const handleInputChange = (field, value) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">📋 Event List</h2>

   <div className="hidden md:grid grid-cols-6 font-semibold text-gray-800 bg-gray-100 p-3 rounded-md mb-2">
  <span>Image</span>
  <span>Title</span>
  <span>Description</span>
  <span>Location</span>
  <span className="text-center">Edit</span>
  <span className="text-center">Delete</span>
</div>

      {list.length > 0 ? (
        list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-6 items-center gap-4 bg-white p-4 rounded-md shadow mb-3"
          >
            {/* Image */}
            <div>
              {editableId === item._id ? (
                <input
                  type="text"
                  value={editData.image}
                  onChange={(e) => handleInputChange('image', e.target.value)}
                  className="w-full p-2 border rounded-md text-sm"
                  placeholder="Image URL"
                />
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full md:w-20 h-20 object-cover rounded-md"
                />
              )}
            </div>

            {/* Title */}
            <div>
              {editableId === item._id ? (
                <input
                  type="text"
                  value={editData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="Title"
                />
              ) : (
                <p className="font-medium text-gray-700">{item.title}</p>
              )}
            </div>

            {/* Date */}
            {/* <div>
              {editableId === item._id ? (
                <input
                  type="date"
                  value={editData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              ) : (
                <p className="text-gray-600">{item.date}</p>
              )}
            </div> */}

          
               <div>
              {editableId === item._id ? (
                <input
                  type="discription"
                  value={editData.discription}
                  onChange={(e) => handleInputChange('discription', e.target.value)}
                  className="w-full p-2 border rounded-md"
                />
              ) : (
                <p className="text-gray-600">{item.discription}</p>
              )}
            </div>
            <div>
              {editableId === item._id ? (
                <input
                  type="text"
                  value={editData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="Location"
                />
              ) : (
                <p className="font-semibold text-gray-800">{item.location}</p>
              )}
            </div>

            {/* Edit/Save Icon */}
            <div className="flex justify-start md:justify-center">
              {editableId === item._id ? (
                <RiSaveFill
                  className="text-green-500 hover:text-green-700 text-xl cursor-pointer"
                  title="Save"
                  onClick={() => saveEdit(item._id)}
                />
              ) : (
                <RiEdit2Fill
                  className="text-blue-500 hover:text-blue-700 text-xl cursor-pointer"
                  title="Edit"
                  onClick={() => handleEdit(item)}
                />
              )}
            </div>

            {/* Delete/Cancel Icon */}
            <div className="flex justify-start md:justify-center">
              {editableId === item._id ? (
                <RiCloseFill
                  className="text-gray-500 hover:text-gray-700 text-xl cursor-pointer"
                  title="Cancel"
                  onClick={cancelEdit}
                />
              ) : (
                <RiDeleteBin5Fill
                  className="text-red-500 hover:text-red-700 text-xl cursor-pointer"
                  title="Delete"
                  onClick={() => deleteEvent(item._id)}
                />
              )}
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 mt-10">No events found.</p>
      )}
    </div>
  );
};

export default ListMenu;