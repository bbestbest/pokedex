import express from "express";

const index = (req: express.Request, res: express.Response) => {};
const getById = (req: express.Request, res: express.Response) => {};
const store = (req: express.Request, res: express.Response) => {};
const updateById = (req: express.Request, res: express.Response) => {};
const deleteById = (req: express.Request, res: express.Response) => {};

module.exports = { index, getById, store, updateById, deleteById };
