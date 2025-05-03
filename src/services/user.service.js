const User = require('../models/user.mode');


//유저생성
exports.createUser = async (userData) => {
    const user = new User(userData);
    await user.save();
}

//유저조회
exports.getUser = async (id) => {
    const user = User.findById(id);
    return user;
}

//유저수정
exports.updateUser = async (id, userUpdate) => {
    await User.findByIdAndUpdate(id, userUpdate);
}

//유저삭제
exports.deleteUser = async (id) => {
    await User.findByIdAndDelete(id);
}   