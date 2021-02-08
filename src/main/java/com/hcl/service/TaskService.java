package com.hcl.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.model.Task;
import com.hcl.repository.TskRepository;

@Service
public class TaskService {

	@Autowired
	private TskRepository repo;

	public Task saveTask(Task tsk) {
		return repo.save(tsk);
	}

	public List<Task> findAllTasks() {
		return (List<Task>) repo.findAll();
	}

	public Optional<Task> findTaskById(long id) {
		return repo.findById(id);
	}

	public void deleteTask(long id) {
		repo.deleteById(id);
	}

}
