// CRUD

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database!')
    }

    // console.log('Connected correctly...')
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Subroto',
    //     age: 27
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Amiya',
    //         age: 27,
    //     }, {
    //         name: 'Partha',
    //         age: 30
    //     }
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert document')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'clean desk',
    //         completed: true
    //     }, {
    //         description: 'shopping grossary',
    //         completed: false
    //     }

    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert document')
    //     }

    //     console.log(result.ops)
    // })

    //read
    // db.collection('tasks').findOne({ _id: new ObjectID("604f80bc3273641b68b2b28f") }, (error, task) => {
    //     if(error) {return console.log("unable to show!")}

    //     console.log(task)

    // } )

    // db.collection('tasks').find({completed: true}).toArray((error, tasks) => {
    //     if(error) {return console.log("unable to show!")}

    //     console.log(tasks)
    // })

    //Update
    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    //delete
    db.collection('tasks').deleteOne({
        description: "clean room"
    }).then((result) => {
        console.log(result)
    }).then((error) => {
        console.log(error)
    })
})