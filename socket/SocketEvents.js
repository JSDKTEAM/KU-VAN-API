class SocketEvents {

    constructor(socket) {
        this.io = socket;
        this.userInDashboard = [];
        this.userInDashboardPublic = [];
    }

    socketEvents() {
        this.io.on('connection', (socket) => {
            /**
             * get the user's Chat list
             */
            socket.on('UserList', async (userId) => {
                const result = await helper.selectUser();
                this.io.to(socket.id).emit('UserListRes', {
                    data: result,
                });
            });

            socket.on('chatList', async (userId) => {
                const result = await helper.getChatList(userId);
                this.io.to(socket.id).emit('chatListRes', {
                    userConnected: false,
                    chatList: result.chatlist
                });

                socket.broadcast.emit('chatListRes', {
                    userConnected: true,
                    userId: userId,
                    socket_id: socket.id
                });
            });

            socket.on('disconnect', async () => {
                const isLoggedOut = await helper.logoutUser(socket.id);
                socket.broadcast.emit('chatListRes', {
                    userDisconnected: true,
                    socket_id: socket.id
                });
            });
        });

    }

    socketConfig() {

        this.io.set('transports', ['websocket']);
        // this.io.use(async (socket, next) => {
        //     try {
           

        //         } 
        //         else{
        //             next();
        //         }
        //     } catch (e) {
        //         console.log(e);
        //         //next();
        //     }
        // });

        this.socketEvents();
    }
}
module.exports = SocketEvents;