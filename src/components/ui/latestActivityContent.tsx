"use client"
import React from "react";
import { Link, Chip, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react";
import activityData from "@/data/activity.json";

interface GitHubCommit {
    sha: string;
    commit: {
        message: string;
        author: {
            name: string;
            date: string;
        };
    };
    html_url: string;
    repository?: {
        name: string;
        full_name: string;
    };
}

export default function LatestActivityContent() {
    const commits = activityData as GitHubCommit[];

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - date.getTime());
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
        const diffMinutes = Math.floor(diffTime / (1000 * 60));

        if (diffDays > 0) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
        if (diffHours > 0) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
        if (diffMinutes > 0) return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
        return 'just now';
    };

    return (
        <div className="w-full h-fit min-h-[60vh] -mt-16 flex flex-col">
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Latest Activity</h2>
                <p className="text-default-500 text-sm">Recent commits and updates</p>
            </div>

            <Table aria-label="Latest GitHub commits" removeWrapper>
                <TableHeader>
                    <TableColumn>ACTIVITY</TableColumn>
                    <TableColumn>TYPE</TableColumn>
                    <TableColumn>TIME</TableColumn>
                </TableHeader>
                <TableBody>
                    {commits.map((commit) => (
                        <TableRow key={commit.sha}>
                            <TableCell>
                                <Link 
                                    href={commit.html_url}
                                    isExternal
                                    size="sm"
                                    className="font-medium"
                                >
                                    {commit.commit.message.split('\n')[0]}
                                </Link>
                            </TableCell>
                            <TableCell>
                                {commit.repository && (
                                    <Chip size="sm" variant="flat" color="default">
                                        {commit.repository.name}
                                    </Chip>
                                )}
                            </TableCell>
                            <TableCell>
                                <span className="text-default-400 text-xs">
                                    {formatDate(commit.commit.author.date)}
                                </span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
