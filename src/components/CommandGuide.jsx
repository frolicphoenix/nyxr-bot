import React from 'react';

/**
 * Command guide component that shows command syntax and examples
 */
const CommandGuide = () => {
  return (
    <div className="flex-1 bg-gray-900 rounded-md overflow-hidden flex flex-col">
      <div className="bg-red-900 p-2 text-white font-semibold">
        Guide: How to use the commands
      </div>
      <div className="p-4 font-mono text-gray-300 text-sm">
        <div className="mb-4">
          <span className="text-gray-400">{'->'} syntax: </span>
          <span className="text-red-400">command </span>
          <span className="text-blue-400">subcommand </span>
          <span className="text-yellow-400">(item) </span>
          <span className="text-green-400">input</span>
        </div>
        
        <div className="mb-1">
          <span className="text-gray-400">{'->'} </span>
          <span className="text-red-400">command </span>
          {'->'} <span className="text-yellow-400">{'{'}</span><span className="text-red-400">nyxr</span><span className="text-yellow-400">{'}'}</span>
        </div>
        
        <div className="mb-1">
          <span className="text-gray-400">{'->'} </span>
          <span className="text-blue-400">subcommand </span>
          {'->'} <span className="text-yellow-400">{'{'}</span><span className="text-blue-400">start, show, list, detail, check, help</span><span className="text-yellow-400">{'}'}</span>
        </div>
        
        <div className="mb-1">
          <span className="text-gray-400">{'->'} </span>
          <span className="text-yellow-400">item </span>
          {'->'} <span className="text-yellow-400">{'{'}</span><span className="text-yellow-400">contact, projects, skills, education, hobbies, anime, manga, games</span><span className="text-yellow-400">{'}'}</span>
        </div>
        
        <div className="mb-4">
          <span className="text-gray-400">{'->'} </span>
          <span className="text-green-600">input </span>
          {'->'} <span className="text-yellow-400">{'{'}</span><span className="text-green-400">title/name</span><span className="text-yellow-400">{'}'}</span>
        </div>
        
        <div className="mb-1">
          <span className="text-gray-400">{'->'} <b>START WITH THIS</b> (&gt;&gt;: </span>
          <span className="text-red-400">nyxr </span>
          <span className="text-blue-400">help</span>
          <span className="text-gray-400">)</span>
        </div>
        
        <div className="mb-4">
          <span className="text-gray-400"> </span>
          <span className="text-green-400"></span>
        </div>
        
        <div className="mb-1">
          <span className="text-gray-400">{'->'} Examples:</span>
        </div>
        
        <div className="ml-2 mb-1">
          <span className="text-gray-400">&gt;&gt;: </span>
          <span className="text-red-400">nyxr </span>
          <span className="text-blue-400">show </span>
          <span className="text-yellow-400">contact</span>
        </div>
        
        <div className="ml-2 mb-1">
          <span className="text-gray-400">&gt;&gt;: </span>
          <span className="text-red-400">nyxr </span>
          <span className="text-blue-400">list </span>
          <span className="text-yellow-400">skills</span>
        </div>
        
        <div className="ml-2 mb-1">
          <span className="text-gray-400">&gt;&gt;: </span>
          <span className="text-red-400">nyxr </span>
          <span className="text-blue-400">detail </span>
          <span className="text-yellow-400">project </span>
          <span className="text-green-400">NAME</span>
        </div>
        
        <div className="ml-2 mb-1">
          <span className="text-gray-400">&gt;&gt;: </span>
          <span className="text-red-400">nyxr </span>
          <span className="text-blue-400">check </span>
          <span className="text-yellow-400">availability</span>
        </div>
        
        <div className="ml-2 mb-1">
          <span className="text-gray-400">&gt;&gt;: </span>
          <span className="text-red-400">nyxr </span>
          <span className="text-blue-400">help</span>
        </div>
      </div>
    </div>
  );
};

export { CommandGuide };