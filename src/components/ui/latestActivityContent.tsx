"use client"
import React from "react";
import { Card, CardBody, CardHeader, Chip, Avatar, Link } from "@heroui/react";
import { CalendarIcon, CodeBracketIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

interface Activity {
    id: string;
    type: "commit" | "project" | "blog";
    title: string;
    description: string;
    date: string;
    link?: string;
    repo?: string;
    icon: React.ReactNode;
}

export default function LatestActivityContent() {
    const activities: Activity[] = [
        {
            id: "1",
            type: "commit",
            title: "Added dark mode toggle to portfolio",
            description: "Implemented theme switching functionality with persistent state across sessions",
            date: "2 days ago",
            repo: "portfolio",
            link: "https://github.com/neillouis3/portfolio",
            icon: <CodeBracketIcon className="w-5 h-5" />
        },
        {
            id: "2",
            type: "project",
            title: "Launched new side project: TaskFlow",
            description: "Built a collaborative task management app with real-time updates",
            date: "5 days ago",
            link: "https://github.com/neillouis3/taskflow",
            icon: <CodeBracketIcon className="w-5 h-5" />
        },
        {
            id: "3",
            type: "blog",
            title: "Published: Building Scalable React Apps",
            description: "A comprehensive guide on architecture patterns and best practices",
            date: "1 week ago",
            link: "#",
            icon: <DocumentTextIcon className="w-5 h-5" />
        },
        {
            id: "4",
            type: "commit",
            title: "Optimized database queries",
            description: "Reduced API response time by 40% through query optimization",
            date: "2 weeks ago",
            repo: "backend-api",
            link: "https://github.com/neillouis3/backend-api",
            icon: <CodeBracketIcon className="w-5 h-5" />
        }
    ];

    const getActivityColor = (type: Activity["type"]) => {
        switch (type) {
            case "commit":
                return "primary";
            case "project":
                return "success";
            case "blog":
                return "warning";
            default:
                return "default";
        }
    };

    return (
        <div className="w-full h-fit min-h-[60vh] -mt-16 flex flex-col">
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Latest Activity</h2>
                <p className="text-default-500 text-sm">Recent work, commits, and updates</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activities.map((activity) => (
                    <Card 
                        key={activity.id} 
                        className="hover:scale-[1.02] transition-transform cursor-pointer"
                        isPressable
                        as={activity.link ? Link : "div"}
                        href={activity.link}
                        isExternal={!!activity.link}
                    >
                        <CardHeader className="flex gap-3">
                            <Avatar
                                icon={activity.icon}
                                classNames={{
                                    base: `bg-${getActivityColor(activity.type)}/10`,
                                    icon: `text-${getActivityColor(activity.type)}`
                                }}
                                radius="sm"
                            />
                            <div className="flex flex-col flex-1">
                                <div className="flex items-center justify-between">
                                    <p className="text-md font-semibold">{activity.title}</p>
                                    <Chip 
                                        size="sm" 
                                        color={getActivityColor(activity.type)}
                                        variant="flat"
                                    >
                                        {activity.type}
                                    </Chip>
                                </div>
                                {activity.repo && (
                                    <p className="text-small text-default-400">@{activity.repo}</p>
                                )}
                            </div>
                        </CardHeader>
                        <CardBody className="pt-0">
                            <p className="text-sm text-default-600">{activity.description}</p>
                            <div className="flex items-center gap-2 mt-3 text-xs text-default-400">
                                <CalendarIcon className="w-4 h-4" />
                                <span>{activity.date}</span>
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
}
